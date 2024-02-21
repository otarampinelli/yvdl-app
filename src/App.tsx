import { useState } from "react";
import BasicPage from "./components/BasicPage";
import styled from "styled-components";

const InputField = styled.input`
  border: 1px solid gray;
  height: 25px;
  width: 50%;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    padding-left: 2px;
    font-weight: 500;
  }
`;

const ButtonSearch = styled.button`
  background: #008ecc;
  color: white;
  border: none;
  cursor: pointer;
  width: 125px;
  height: 25px;
  border-radius: 8px;
  &:hover {
    background: #0486bf;
  }
`;

const ContentTitle = styled.h1`
  color: rgb(39, 43, 51);
  font-weight: 700;
`;

function App() {
  const [url, setUrl] = useState<string>("");

  const handleDownload = () => {
    fetch(`http://localhost:5000/download?url=${url}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Download error");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "video.mp4");
        document.body.appendChild(link);
        link.click();
        link?.parentNode?.removeChild(link);
        setUrl('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <BasicPage>
      <>
        <ContentTitle>
          Faça o download de vídeos do Youtube de forma gratuita.
        </ContentTitle>
        <InputField
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Cole o link do vídeo aqui"
        />
        <ButtonSearch
          onClick={(e) => {
            e.preventDefault();
            handleDownload();
          }}
        >
          Download
        </ButtonSearch>
      </>
    </BasicPage>
  );
}

export default App;
