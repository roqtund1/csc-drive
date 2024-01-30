import FolderIcon from "@mui/icons-material/Folder";
import "../styles/Data.css";


export default function Data() {
  return (
    <div className="data-container">
      <div className="data-grid">
        <article className="data-file">
          <FolderIcon className="icon" />
          <p className="name"></p>
          <p className="title">CPE 401</p>
        </article>
        <article className="data-file">
          <FolderIcon className="icon" />
          <p className="name"></p>
          <p className="title">CPE 401</p>
        </article>
        <article className="data-file">
          <FolderIcon className="icon" />
          <p className="name"></p>
          <p className="title">CPE 401</p>
        </article>
        <article className="data-file">
          <FolderIcon className="icon" />
          <p className="name"></p>
          <p className="title">CPE 401</p>
        </article>
        <article className="data-file">
          <FolderIcon className="icon" />
          <p className="name"></p>
          <p className="title">CPE 401</p>
        </article>
      </div>
    </div>
  );
}
