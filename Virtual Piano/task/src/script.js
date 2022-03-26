

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        let audioA = new Audio("white_keys/A.mp3");
        audioA.play();
        console.log("The 'a' key is pressed.");
    }
    else if (event.key === "s") {
        let audioS = new Audio("white_keys/S.mp3");
        audioS.play();
        console.log("The 's' key is pressed.");
    }
    else if (event.key === "d") {
        let audioD = new Audio("white_keys/D.mp3");
        audioD.play();
        console.log("The 'd' key is pressed.");
    }
    else if (event.key === "f") {
        let audioF = new Audio("white_keys/F.mp3");
        audioF.play();
        console.log("The 'f' key is pressed.");
    }
    else if (event.key === "g") {
        let audioG = new Audio("white_keys/G.mp3");
        audioG.play();
        console.log("The 'g' key is pressed.");
    }
    else if (event.key === "h") {
        let audioH = new Audio("white_keys/H.mp3");
        audioH.play();
        console.log("The 'h' key is pressed.");
    }
    else if (event.key === "j") {
        let audioJ = new Audio("white_keys/J.mp3");
        audioJ.play();
        console.log("The 'j' key is pressed.");
    }



    else if (event.key === "w") {
        let audioW = new Audio("black_keys/W.mp3");
        audioW.play();
        console.log("The 'w' key is pressed.");
    }
    else if (event.key === "e") {
        let audioE = new Audio("black_keys/E.mp3");
        audioE.play();
        console.log("The 'e' key is pressed.");
    }
    else if (event.key === "u") {
        let audioU = new Audio("black_keys/u.mp3");
        audioU.play();
        console.log("The 'u' key is pressed.");
    }
    else if (event.key === "t") {
        let audioT = new Audio("black_keys/T.mp3");
        audioT.play();
        console.log("The 't' key is pressed.");
    }
    else if (event.key === "y") {
        let audioY = new Audio("black_keys/Y.mp3");
        audioY.play();
        console.log("The 'y' key is pressed.");
    }
    else {
        console.log("Error")
    }
});