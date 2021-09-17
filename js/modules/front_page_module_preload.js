const generateFrontPagePreload=()=>{const mainStyles=`<link rel="preload" as="style" href="css/style.css" media="all">
    <link rel="preload" as="script" href="./js/main.js" media="all">
    <link rel="preload" as="script" href="./js/world_map.js" media="all">`;setTimeout(()=>{document.head.insertAdjacentHTML('beforeEnd',mainStyles)},5000)};generateFrontPagePreload();