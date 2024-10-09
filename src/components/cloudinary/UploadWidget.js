/** @format */

const UploadWidget2 = () => {
  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dligd0nd6`,
        uploadPreset: `pguiqxvb`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
        }
      }
    );
    widget.open();
  };
  return <button onClick={()=>showWidget()}>widget</button>;
};


export default UploadWidget2