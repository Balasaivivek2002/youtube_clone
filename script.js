
function openVideo(videoId) {
    switch (videoId) {
        case 'VIDEO_ID_1':
            window.open("https://youtu.be/rrXvdEMHVXc?si=crfw_M-3YyMvTXGF");
            break;
        case 'VIDEO_ID_2':
            window.open("https://youtu.be/phWxA89Dy94?si=fJkZbY-yly1-Dt_c");
            break;
        case 'VIDEO_ID_3':
            window.open("https://youtu.be/KB_7X3iIHQ4?si=NYcJAm5Oi7mgRvMq");
            break;
        case 'VIDEO_ID_4':
            window.open("https://youtu.be/p1QU3kLFPdg?si=awjxnZIcX2-52PbP");
            break;
        case 'VIDEO_ID_5':
            window.open("https://youtu.be/9uT9rJh9tZw?si=z_Z8c72wxsib07rD");
            break;
        case 'VIDEO_ID_6':
            window.open("https://youtu.be/PmdyY38g6Rg?si=OxxyufEWQdDuvzkk");
            break;
        case 'VIDEO_ID_7':
            window.open("https://youtu.be/KGw8xX3HGW0?si=MHDU-xqOylPv2_jN");
            break;
        case 'VIDEO_ID_8':
            window.open("https://youtu.be/Joo_jE8kMDg?si=jIwfdIGhelDXV0az");
            break;
        default:
            console.error('Invalid video ID:', videoId);
    }
}