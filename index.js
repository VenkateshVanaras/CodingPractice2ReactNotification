const Notification = (props) => {
  //  Write your code here.
  const { imgUrl, imgCls, content, imgCardCls, imgContainer } = props.source;
  return (
    <div className={imgCardCls}>
      <div className={imgContainer}>
        <img src={imgUrl} className={imgCls} />
      </div>
      <p>{content}</p>
    </div>
  );
};
const sourcePrimary = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  imgCls: "image-prop",
  content: "Information Message",
  imgCardCls: "imgBoxContainer",
  imgContainer: "image-container",
  imgCardColor: "box1",
};
const sourceSuccess = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  imgCls: "image-prop",
  content: "Success Message",
  imgCardCls: "imgBoxContainer2",
  imgContainer: "image-container",
};
const sourceWarning = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  imgCls: "image-prop",
  content: "Warning Message",
  imgCardCls: "imgBoxContainer3",
  imgContainer: "image-container",
};
const sourceError = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  imgCls: "image-prop",
  content: "Error Message",
  imgCardCls: "imgBoxContainer4",
  imgContainer: "image-container",
};
const element = (
  //  Write your code here.
  <div className="main-card">
    <h1 className="main-heading">Notifications</h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceError} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
