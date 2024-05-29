function Podcast({ title, pubDate, link, mp3 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <div style={{ background: "tomato" }}>
        <a href={link} target="_blank">
          <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
            {title}
          </p>
          <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
            {pubDate}
          </p>
        </a>
        <audio src={mp3} controls></audio>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          flexWrap: "wrap",
          background: "#f0f0f0",
        }}
      >
        <label style={{width:'100%',textAlign:'center'}} htmlFor="notes">Make Notes Here</label>
        <textarea
          id="notes"
          placeholder="Tamane shu lage chhe aa podcast mate ???"
          rows={7}
        ></textarea>
      </div>
    </div>
  );
}

export default Podcast;
