slideShowURL = 'SlideShow_assets/SlideShow.html';       // parameter from openSlideShowWindow.js
slideShowNS4URL = 'SlideShow_assets/SlideShowNS4.html'; // parameter from openSlideShowWindow.js

slides = new Array();
slides[0] = new Slide('../Hand Dyed Fabrics_files/3101_Aqua_Marine_Blue.jpg', '411', '480', '3101 Aqua Marine Blue');
slides[1] = new Slide('../Hand Dyed Fabrics_files/3102_Aqua_Marine_Blue_Lemon_Yellow.jpg', '411', '480', '3102 Aqua Marine Blue Lemon Yellow');
slides[2] = new Slide('../Hand Dyed Fabrics_files/3103_Aqua_Marine_Blue_Lemon_Yellow.jpg', '412', '480', '3103 Aqua Marine Blue Lemon Yellow');
slides[3] = new Slide('../Hand Dyed Fabrics_files/3104_Aqua_Marine_Blue_Lemon_Yellow.jpg', '411', '480', '3104 Aqua Marine Blue Lemon Yellow');
slides[4] = new Slide('../Hand Dyed Fabrics_files/3105_Aqua_Marine_Blue_Lemon_Yellow.jpg', '412', '480', '3105 Aqua Marine Blue Lemon Yellow');
slides[5] = new Slide('../Hand Dyed Fabrics_files/3106_Aqua_Marine_Blue_Lemon_Yellow.jpg', '413', '480', '3106 Aqua Marine Blue Lemon Yellow');
slides[6] = new Slide('../Hand Dyed Fabrics_files/3107_Aqua_Marine_Blue_Lemon_Yellow.jpg', '412', '480', '3107 Aqua Marine Blue Lemon Yellow');
slides[7] = new Slide('../Hand Dyed Fabrics_files/3108_Aqua_Marine_Blue_Lemon_Yellow.jpg', '410', '480', '3108 Aqua Marine Blue Lemon Yellow');
slides[8] = new Slide('../Hand Dyed Fabrics_files/3109_Lemon_Yellow.jpg', '410', '480', '3109 Lemon Yellow');
slides[9] = new Slide('../Hand Dyed Fabrics_files/3110_Lemon_Yellow_Cobalt_Blue.jpg', '425', '402', '3110 Lemon Yellow Cobalt Blue');
slides[10] = new Slide('../Hand Dyed Fabrics_files/3111_Lemon_Yellow_Cobalt_Blue.jpg', '432', '411', '3111 Lemon Yellow Cobalt Blue');
slides[11] = new Slide('../Hand Dyed Fabrics_files/3112_Lemon_Yellow_Cobalt_Blue.jpg', '427', '411', '3112 Lemon Yellow Cobalt Blue');
slides[12] = new Slide('../Hand Dyed Fabrics_files/3113_Lemon_Yellow_Cobalt_Blue.jpg', '396', '404', '3113 Lemon Yellow Cobalt Blue');
slides[13] = new Slide('../Hand Dyed Fabrics_files/3114_Lemon_Yellow_Cobalt_Blue.jpg', '394', '392', '3114 Lemon Yellow Cobalt Blue');
slides[14] = new Slide('../Hand Dyed Fabrics_files/3115_Lemon_Yellow_Cobalt_Blue.jpg', '394', '404', '3115 Lemon Yellow Cobalt Blue');
slides[15] = new Slide('../Hand Dyed Fabrics_files/3116_Lemon_Yellow_Cobalt_Blue.jpg', '395', '402', '3116 Lemon Yellow Cobalt Blue');
slides[16] = new Slide('../Hand Dyed Fabrics_files/3117_Cobalt_Blue.jpg', '379', '390', '3117 Cobalt Blue');
slides[17] = new Slide('../Hand Dyed Fabrics_files/3118_Cobalt_Blue_Cardinal_Red.jpg', '460', '448', '3118 Cobalt Blue Cardinal Red');
slides[18] = new Slide('../Hand Dyed Fabrics_files/3119_Cobalt_Blue_Cardinal_Red.jpg', '461', '437', '3119 Cobalt Blue Cardinal Red');
slides[19] = new Slide('../Hand Dyed Fabrics_files/3120_Cobalt_Blue_Cardinal_Red.jpg', '459', '433', '3120 Cobalt Blue Cardinal Red.');
slides[20] = new Slide('../Hand Dyed Fabrics_files/3121_Cobalt_Blue_Cardinal_Red.jpg', '464', '433', '3121 Cobalt Blue Cardinal Red');
slides[21] = new Slide('../Hand Dyed Fabrics_files/3122_Cobalt_Blue_Cardinal_Red.jpg', '464', '434', '3122 Cobalt Blue Cardinal Red');
slides[22] = new Slide('../Hand Dyed Fabrics_files/3123_Cobalt_Blue_Cardinal_Red.jpg', '464', '439', '3123 Cobalt Blue Cardinal Red');
slides[23] = new Slide('../Hand Dyed Fabrics_files/3124_Cobalt_Blue_Cardinal_Red.jpg', '464', '432', '3124 Cobalt Blue Cardinal Red');
slides[24] = new Slide('../Hand Dyed Fabrics_files/3125_Cardinal_Red.jpg', '464', '439', '3125 Cardinal Red');
slides[25] = new Slide('../Hand Dyed Fabrics_files/3134_Velvet_Brown.jpg', '410', '400', '3134 Velvet Brown');
slides[26] = new Slide('../Hand Dyed Fabrics_files/3135_Cardinal_Red_Velvet_Brown.jpg', '187', '196', '3135 Cardinal Red Velvet Brown');
slides[27] = new Slide('../Hand Dyed Fabrics_files/3136_Cardinal_Red_Velvet_Brown.jpg', '187', '190', '3136 Cardinal Red Velvet Brown');
slides[28] = new Slide('../Hand Dyed Fabrics_files/3137_Raw_Sienna_Lemon_Yellow.jpg', '379', '432', '3137 Raw Sienna Lemon Yellow');
slides[29] = new Slide('../Hand Dyed Fabrics_files/3138_Raw_Sienna_Lemon_Yellow.jpg', '380', '432', '3138 Raw Sienna Lemon Yellow');
slides[30] = new Slide('../Hand Dyed Fabrics_files/3140_Raw_Sienna_Lemon_Yellow.jpg', '384', '422', '3140 Raw Sienna Lemon Yellow');
slides[31] = new Slide('../Hand Dyed Fabrics_files/3241_Ultra_Marine_Blue_to_Cardinal_Red.jpg', '539', '403', '3241 Ultra Marine Blue to Cardinal Red');
slides[32] = new Slide('../Hand Dyed Fabrics_files/3242_Cobalt_Blue_to_Cardinal_Red.jpg', '800', '620', '3242 Cobalt Blue to Cardinal Red');
slides[33] = new Slide('../Hand Dyed Fabrics_files/3243_Aqua_Marine_Blue_to_Lemon_Yellow.jpg', '765', '768', '3243 Aqua Marine Blue to Lemon Yellow');
slides[34] = new Slide('../Hand Dyed Fabrics_files/3244_Cobalt_Blue_to_Lemon_yellow.jpg', '800', '401', '3244 Cobalt Blue to Lemon yellow');
isPureISOLatin1 = true;
contentEncodingConstant = 4;
feedbackURL = "TODO";
showFeedbackButton = false;
feedbackEnabled = true;

function NBmouseover(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "hidden";
        rollover.style.visibility = "visible";
    }
    return true;
}

function NBmouseout(index)
{
    var normal = document.getElementById("navbar_"+index+"_normal");
    var rollover = document.getElementById("navbar_"+index+"_rollover");
    if (normal && rollover)
    {
        normal.style.visibility = "visible";
        rollover.style.visibility = "hidden";
    }
    return true;
}

var smallTransparentGif = "";
function fixupIEPNG(strImageID, transparentGif) 
{
    smallTransparentGif = transparentGif;
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        var img = document.getElementById(strImageID);
        if (img)
        {
            var src = img.src;
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
            img.src = transparentGif;
            img.attachEvent("onpropertychange", imgPropertyChanged);
        }
    }
}

var windowsInternetExplorer = false;
var browserVersion = 0;
function detectBrowser()
{
    windowsInternetExplorer = false;
    var appVersion = navigator.appVersion;
    if ((appVersion.indexOf("MSIE") != -1) &&
        (appVersion.indexOf("Macintosh") == -1))
    {
        var temp = appVersion.split("MSIE");
        browserVersion = parseFloat(temp[1]);
        windowsInternetExplorer = true;
    }
}

var inImgPropertyChanged = false;
function imgPropertyChanged()
{
    if ((window.event.propertyName == "src") && (! inImgPropertyChanged))
    {
        inImgPropertyChanged = true;
        var el = window.event.srcElement;
        if (el.src != smallTransparentGif)
        {
            el.filters.item(0).src = el.src;
            el.src = smallTransparentGif;
        }
        inImgPropertyChanged = false;
    }
}

function fixupIEPNGBG(oBlock) 
{
    if (oBlock)
    {
        var currentBGImage = oBlock.currentStyle.backgroundImage;
        var currentBGRepeat = oBlock.currentStyle.backgroundRepeat;
        var urlStart = currentBGImage.indexOf('url(');
        var urlEnd = currentBGImage.indexOf(')', urlStart);
        var imageURL = currentBGImage.substring(urlStart + 4, urlEnd);

        if (imageURL.charAt(0) == '"')
        {
            imageURL = imageURL.substring(1);
        }
        
        if (imageURL.charAt(imageURL.length - 1) == '"')
        {
            imageURL = imageURL.substring(0, imageURL.length - 1);
        }

        var overrideRepeat = false;

        var filterStyle =
            "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            imageURL +
            "', sizingMethod='crop');";

        if (RegExp("/C[0-9A-F]{8}.png$").exec(imageURL) != null)
        {
            filterStyle =
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                imageURL +
                "', sizingMethod='scale');";

            overrideRepeat = true;
        }

        var backgroundImage = new Image();
        backgroundImage.src = imageURL;
        var tileWidth = backgroundImage.width;
        var tileHeight = backgroundImage.height; 
        
        var blockWidth = 0;
        var blockHeight = 0;
        if (oBlock.style.width)
        {
            blockWidth = parseInt(oBlock.style.width);
        }
        else
        {
            blockWidth = oBlock.offsetWidth;
        }
        if (oBlock.style.height)
        {
            blockHeight = parseInt(oBlock.style.height);
        }
        else
        {
            blockHeight = oBlock.offsetHeight;
        }

        if ((blockWidth == 0) || (blockHeight == 0))
        {
            return;
        }
        
        var wholeRows = 1;
        var wholeCols = 1;
        var extraHeight = 0;
        var extraWidth = 0;
        
        if ((currentBGRepeat.indexOf("no-repeat") != -1) ||
              ((tileWidth == 0) && (tileHeight == 0)) ||
              overrideRepeat)
        {
            tileWidth = blockWidth;
            tileHeight = blockHeight;

        }
        else if ((currentBGRepeat.indexOf("repeat-x") != -1) ||
              (tileHeight == 0))
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            tileHeight = blockHeight;

        }
        else if (currentBGRepeat.indexOf("repeat-y") != -1)
        {
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraHeight = blockHeight - (tileHeight * wholeRows);
            tileWidth = blockWidth;

        }
        else
        {
            wholeCols = Math.floor(blockWidth / tileWidth);
            wholeRows = Math.floor(blockHeight / tileHeight);
            extraWidth = blockWidth - (tileWidth * wholeCols);
            extraHeight = blockHeight - (tileHeight * wholeRows);
        }
        
        var wrappedContent = document.createElement("div");
        wrappedContent.style.position = "relative";
        wrappedContent.style.zIndex = "1";
        wrappedContent.style.left = "0px";
        wrappedContent.style.top = "0px";
        if (!isNaN(parseInt(oBlock.style.width)))
        {
            wrappedContent.style.width = "" + blockWidth + "px";
        }
        if (!isNaN(parseInt(oBlock.style.height)))
        {
            wrappedContent.style.height = "" + blockHeight + "px";
        }
        var pngBGFixIsWrappedContentEmpty = true;
        while (oBlock.hasChildNodes())
        {
            if (oBlock.firstChild.nodeType == 3)
            {
                if (RegExp("^ *$").exec(oBlock.firstChild.data) == null)
                {
                    pngBGFixIsWrappedContentEmpty = false;
                }
            }
            else
            {
                pngBGFixIsWrappedContentEmpty = false;
            }
            wrappedContent.appendChild(oBlock.firstChild);
        }
        if (pngBGFixIsWrappedContentEmpty)
        {
            wrappedContent.style.lineHeight = "0px";
        }
        
        var newMarkup = "";
        for (var currentRow = 0; 
             currentRow < wholeRows; 
             currentRow++)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + tileHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        
        if (extraHeight != 0)
        {
            for (currentCol = 0; 
                 currentCol < wholeCols; 
                 currentCol++)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + tileWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
            
            if (extraWidth != 0)
            {
                newMarkup += "<div style=" +
                        "\"position: absolute; line-height: 0px; " +
                        "width: " + extraWidth + "px; " +
                        "height: " + extraHeight + "px; " +
                        "left:" + currentCol *  tileWidth + "px; " +
                        "top:" + currentRow *  tileHeight + "px; " +
                        "filter:" + filterStyle + 
                        "\" > </div>";
            }
        }
        oBlock.innerHTML = newMarkup;

        oBlock.appendChild(wrappedContent);
        oBlock.style.background= "";
    }
}

function fixupAllIEPNGBGs()
{
    if (windowsInternetExplorer && (browserVersion < 7))
    {
        try
        {
            var oDivNodes = document.getElementsByTagName('DIV');
            for (var iIndex=0; iIndex<oDivNodes.length; iIndex++)
            {
                var oNode = oDivNodes.item(iIndex);
                if (oNode.currentStyle &&
                    oNode.currentStyle.backgroundImage &&
                    (oNode.currentStyle.backgroundImage.indexOf('url(') != -1) &&
                    (oNode.currentStyle.backgroundImage.indexOf('.png")') != -1))
                {
                    fixupIEPNGBG(oNode);
                }
            }
        }
        catch (e)
        {
        }
    }
}

function onPageLoad()
{
    detectBrowser();
    fixupIEPNG("id1", "Hand Dyed Fabrics_files/transparent.gif");
    fixupAllIEPNGBGs();
    fixupIEPNG("id2", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id3", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id4", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id5", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id6", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id7", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id8", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id9", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id10", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id11", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id12", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id13", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id14", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id15", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id16", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id17", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id18", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id19", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id20", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id21", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id22", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id23", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id24", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id25", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id26", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id27", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id28", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id29", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id30", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id31", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id32", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id33", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id34", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id35", "Hand Dyed Fabrics_files/transparent.gif");
    fixupIEPNG("id36", "Hand Dyed Fabrics_files/transparent.gif");
    return true;
}

