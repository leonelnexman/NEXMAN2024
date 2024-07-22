import { Fancybox } from "@fancyapps/ui";


document.addEventListener('DOMContentLoaded', () => {
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            type: "classic",
        },
        toolbar: false, 
        // closeButton: "top",
    });

    document.querySelector('.fancybox-close').addEventListener('click', () => {
        Fancybox.close();
    });
});