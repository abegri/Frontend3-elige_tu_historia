import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function SweetAlert(text, thanks){
    MySwal.fire({
        title: "<h2 style='color:white'>" + text + "</h2>",
        background: 'url(https://media.gettyimages.com/videos/-video-id1022530448?s=640x640)',
        width: 500,
        padding: '3em',
        timer: 3000,
        confirmButtonColor: "black",
        footer: "<h3 style='color:white'>" + thanks + "</h3>"
    })
}

export default SweetAlert;