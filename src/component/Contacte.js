import "../css/Contacte.css";

const Contacte = () => {
  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="input-name">
            <input type="text" placeholder="name" className="name" />
            <input type="text" placeholder="prenome" className="name" />
          </div>
          <div className="input-msg">
            <input type="text" placeholder="object" className="object" />
            <input type="email" placeholder="email" className="object" />
            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              className="textarea"
            >
              message ...
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacte;
