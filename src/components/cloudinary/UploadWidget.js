/** @format */
const UploadWidget2 = ({seturl, widgetStyles = ''}) => {
  
  const showWidget = async() => {
    let widget = await window.cloudinary.createUploadWidget(
      {
        cloudName: `dligd0nd6`,
        uploadPreset: `pguiqxvb`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          seturl(result.info.url)
        }
      }
    );
    widget.open();
  };
  return (
    <button data-field='img' className={widgetStyles} onClick={() => showWidget()}>
      upload
    </button>
  );
};


export default UploadWidget2