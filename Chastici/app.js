particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#732c28", //random // #FFFFFF
      },
      "shape": {
        "type": "circle", // circle edge triangle polygon star 
        "stroke": {
          "width": 5,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 50,
        "color": "#ddf481",
        "opacity": 0.4,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 70,
        "direction": "none", // none top top-right right bottom-right bottom bottom-left left top-left
        "random": true,
        "straight": true,
        "out_mode": "bounce", // out bounce
        "attract": {
          "enable": true,
          "rotateX": 1600,
          "rotateY": 1200
        }
      }
    },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" //grab bubble repulse
      },
      "onclick": {
        "enable": true,
        "mode": "push" // push remove bubble repulse
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 600,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 300,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);