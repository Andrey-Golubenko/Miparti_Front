const generateStyles = () => {
    const mainStyles = `
        <link rel="stylesheet" href="css/style.css">       
    `;
    document.head.insertAdjacentHTML('beforeEnd', mainStyles);
};
generateStyles();
