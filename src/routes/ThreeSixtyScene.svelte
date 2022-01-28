<script>
import '../global.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { mapLinear } from 'three/src/math/MathUtils'
import gsap from 'gsap'
import { 
  sineInOut, 
  circInOut, 
  cubicInOut, 
  linear, 
  quadInOut, 
  expoInOut, 
  quintOut, 
  quartInOut, 
  quintInOut 
} from 'svelte/easing';
import * as DomEvents from "threex-domevents";
  var THREEx = {};
  DomEvents(THREE, THREEx);

import { InteractionManager } from "three.interactive"






setTimeout(() => {
    

/**
 * Loaders
 */

const loadingBarElement = document.getElementById('loading')
console.log(loadingBarElement)

const loadingManager = new THREE.LoadingManager(
    
    //Loaded
    () =>
    {
        gsap.delayedCall(1, () =>
    {
        gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 })
        loadingBarElement.classList.add('ended')
        loadingBarElement.style.transform = ''
        setTimeout(() => {
            scene.remove(overlay)
        }, 3000)
    })
    },

    //Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        const progressRatio =  itemsLoaded / itemsTotal 
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
        //console.log(progressRatio)
    }
)
const gltfLoader = new GLTFLoader(loadingManager)
const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager)



/**
 * Base
 */
// Debug
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//overlay

const overlayGeometry = new THREE.PlaneBufferGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial( {
    transparent: true,
    uniforms: 
    {
        uAlpha: { value: 2 }
    },
    vertexShader: `
        void main()
        {
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: `
    uniform float uAlpha;
        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
    `
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)


/**
 * Update all materials
 */
const updateAllMaterials = () =>
{
    scene.traverse((child) =>
    {
        if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
        {
            // child.material.envMap = environmentMap
            child.material.envMapIntensity = debugObject.envMapIntensity
            child.material.needsUpdate = true
            child.castShadow = true
            child.receiveShadow = true
        }
    })
}

/**
 * Environment maps
 */
const eMapNorthcliffHill = cubeTextureLoader.load([
    '/assets/images/environmentMaps/northcliffHill/px.png',
    '/assets/images/environmentMaps/northcliffHill/nx.png',
    '/assets/images/environmentMaps/northcliffHill/py.png',
    '/assets/images/environmentMaps/northcliffHill/ny.png',
    '/assets/images/environmentMaps/northcliffHill/pz.png',
    '/assets/images/environmentMaps/northcliffHill/nz.png'
])

const eMapRobberg = cubeTextureLoader.load([
    '/assets/images/environmentMaps/robberg/px.png',
    '/assets/images/environmentMaps/robberg/nx.png',
    '/assets/images/environmentMaps/robberg/py.png',
    '/assets/images/environmentMaps/robberg/ny.png',
    '/assets/images/environmentMaps/robberg/pz.png',
    '/assets/images/environmentMaps/robberg/nz.png'
])

const eMapMatjies = cubeTextureLoader.load([
    '/assets/images/environmentMaps/matjies/px.png',
    '/assets/images/environmentMaps/matjies/nx.png',
    '/assets/images/environmentMaps/matjies/py.png',
    '/assets/images/environmentMaps/matjies/ny.png',
    '/assets/images/environmentMaps/matjies/pz.png',
    '/assets/images/environmentMaps/matjies/nz.png'
])

const eMapLinksfield = cubeTextureLoader.load([
    '/assets/images/environmentMaps/linksfield/px.png',
    '/assets/images/environmentMaps/linksfield/nx.png',
    '/assets/images/environmentMaps/linksfield/py.png',
    '/assets/images/environmentMaps/linksfield/ny.png',
    '/assets/images/environmentMaps/linksfield/pz.png',
    '/assets/images/environmentMaps/linksfield/nz.png'
])

const eMapAugrabies = cubeTextureLoader.load([
    '/assets/images/environmentMaps/augrabies/px.png',
    '/assets/images/environmentMaps/augrabies/nx.png',
    '/assets/images/environmentMaps/augrabies/py.png',
    '/assets/images/environmentMaps/augrabies/ny.png',
    '/assets/images/environmentMaps/augrabies/pz.png',
    '/assets/images/environmentMaps/augrabies/nz.png'
])

const eMapNSeven = cubeTextureLoader.load([
    '/assets/images/environmentMaps/nSeven/px.png',
    '/assets/images/environmentMaps/nSeven/nx.png',
    '/assets/images/environmentMaps/nSeven/py.png',
    '/assets/images/environmentMaps/nSeven/ny.png',
    '/assets/images/environmentMaps/nSeven/pz.png',
    '/assets/images/environmentMaps/nSeven/nz.png'
])

const eMapUnterbacherSee = cubeTextureLoader.load([
    '/assets/images/environmentMaps/unterbacherSee/px.png',
    '/assets/images/environmentMaps/unterbacherSee/nx.png',
    '/assets/images/environmentMaps/unterbacherSee/py.png',
    '/assets/images/environmentMaps/unterbacherSee/ny.png',
    '/assets/images/environmentMaps/unterbacherSee/pz.png',
    '/assets/images/environmentMaps/unterbacherSee/nz.png'
])

eMapNorthcliffHill.encoding = THREE.sRGBEncoding
eMapRobberg.encoding = THREE.sRGBEncoding
eMapAugrabies.encoding = THREE.sRGBEncoding
eMapLinksfield.encoding = THREE.sRGBEncoding
eMapMatjies.encoding = THREE.sRGBEncoding
eMapNSeven.encoding = THREE.sRGBEncoding
eMapUnterbacherSee.encoding = THREE.sRGBEncoding


scene.background = eMapRobberg
//scene.environment = eMapNorthcliffHill


debugObject.envMapIntensity = 10



//Gltf

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/assets/draco/') // draco file copied  from node modules to /static

gltfLoader.setDRACOLoader(dracoLoader)

const fontLoader = new FontLoader(loadingManager)


//Sphere

const geoSpehere = new THREE.IcosahedronGeometry(1.5, 6);
const matSphere = new THREE.MeshStandardMaterial( { metalness: 1, roughness: 0, envMap:eMapRobberg, flatShading: false } )
const sphere = new THREE.Mesh(geoSpehere, matSphere)
scene.add(sphere)


        //TEXT


const menuGroup = new THREE.Group()
// menuGroup.position.set(4.6, 0, 2.65)
// menuGroup.rotation.y = - Math.PI / 6
scene.add(menuGroup)

//Button functions



//TEXT

//Material

const textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending} );
const textMaterialRollover = new THREE.MeshBasicMaterial( { color: 0x00ffff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending} );
const textMaterialCurrent = new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending} );


const robbergText = new THREE.Mesh()
const northcliffHillText = new THREE.Mesh()
const augrabiesText = new THREE.Mesh()
const nSevenText = new THREE.Mesh()
const unterbacherSeeText = new THREE.Mesh()
const matjiesText = new THREE.Mesh()
const linksfieldText = new THREE.Mesh()

scene.add(robbergText, northcliffHillText, augrabiesText, nSevenText, unterbacherSeeText, matjiesText, linksfieldText)

let textGeometry

// function Robberg()    
//     {fontLoader.load(
//         '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
//         (font) =>
//         {
//             const textGeometry = new TextGeometry(
//                 `Robberg`,
//                 {
//                     font: font,
//                     size: 0.175,
//                     height: 0.01,
//                     curveSegments: 3,
//                     bevelEnabled: false,
//                     bevelThickness: 0.05,
//                     bevelSize: 0.1,
//                     bevelOffset: - 0.05,
//                     bevelSegments: 1
//                 }
//             )

//             textGeometry.center()
//             textGeometry.computeBoundingBox()
            
//             robbergText.geometry = textGeometry
//             robbergText.material = textMaterial
//             const textRotate = new THREE.Group()
//             textRotate.add(robbergText)
//             robbergText.position.z = 5
//             textRotate.rotation.y = Math.PI  / 36
//             menuGroup.add(textRotate)
//             robbergText.rotation.y = Math.PI
            
//         //     //Domevents

//         //     domEvents.addEventListener(
//         //     robbergText, 
//         //   'click', 
//         //   function () {
//         //     scene.background = eMapRobberg
//         //     matSphere.envMap = eMapRobberg
//         //     },
//         //   false )
          
//         //   domEvents.addEventListener(
//         //     robbergText, 
//         //   'touch', 
//         //   function () {
//         //     scene.background = eMapRobberg
//         //     matSphere.envMap = eMapRobberg
//         //     },
//         //   false )
            


//             })
//         }
// Robberg()



if (scene.background === eMapNorthcliffHill)
                {northcliffHillText.material == textMaterialCurrent}
            else
                { northcliffHillText.material == textMaterial}

//Fontloaders

//Northcliff
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Northcliff`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            northcliffHillText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(northcliffHillText)
            northcliffHillText.position.z = 5
            textRotate.rotation.y = Math.PI * 0.75
            menuGroup.add(textRotate)
            northcliffHillText.rotation.y = Math.PI
            
            
        }
    )

//Augrabies
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Augrabies Falls`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            augrabiesText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(augrabiesText)
            augrabiesText.position.z = 5
            textRotate.rotation.y = Math.PI  / 2
            menuGroup.add(textRotate)
            augrabiesText.rotation.y = Math.PI
            
            
        }
    )

//Linksfield
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Linksfield Ridge`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            linksfieldText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(linksfieldText)
            linksfieldText.position.z = 5
            textRotate.rotation.y = Math.PI
            menuGroup.add(textRotate)
            linksfieldText.rotation.y = Math.PI
            
            
        }
    )

//N7    
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `N7 Western Cape`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            nSevenText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(nSevenText)
            nSevenText.position.z = 5
            textRotate.rotation.y = Math.PI * 0.25
            menuGroup.add(textRotate)
            nSevenText.rotation.y = Math.PI
            
            
        }
    )

//Matjies
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Matjies River`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            matjiesText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(matjiesText)
            matjiesText.position.z = 5
            textRotate.rotation.y = - Math.PI * 0.5
            menuGroup.add(textRotate)
            matjiesText.rotation.y = Math.PI
            
            
        }
    )

//Unterbacher See
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Unterbachersee`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            unterbacherSeeText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(unterbacherSeeText)
            unterbacherSeeText.position.z = 5
            textRotate.rotation.y = - Math.PI * 0.75
            menuGroup.add(textRotate)
            unterbacherSeeText.rotation.y = Math.PI
            
            
        }
    )
    
//Robberg
fontLoader.load(
        '/assets/fonts/JetBrainsMono/JetBrainsMonoExtraBold_Regular.json',
        (font) =>
        {
            textGeometry = new TextGeometry(
                `Robberg Peninsula`,
                {
                    font: font,
                    size: 0.25,
                    height: 0.01,
                    curveSegments: 3,
                    bevelEnabled: false,
                    bevelThickness: 0.05,
                    bevelSize: 0.1,
                    bevelOffset: - 0.05,
                    bevelSegments: 1
                }
            )

            textGeometry.center()
            textGeometry.computeBoundingBox()

            robbergText.geometry = textGeometry

            const textRotate = new THREE.Group()
            textRotate.add(robbergText)
            robbergText.position.z = 5
            textRotate.rotation.y = - Math.PI * 0.25
            menuGroup.add(textRotate)
            robbergText.rotation.y = Math.PI
            
            
        }
    )      

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
directionalLight.castShadow = true
directionalLight.shadow.camera.far = 15
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 3, - 2.25)
//scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 2, - 4)
scene.add(camera)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 0.5;

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

//Raycaster

const raycaster = new THREE.Raycaster()

//mouse / cursor

const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) => 
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1  // or - (event.clientY / sizes.height * 2 - 1)
})

//Functions to apply environment maps

function northcliffHillApply() 
        {
            scene.background = eMapNorthcliffHill
            matSphere.envMap = eMapNorthcliffHill
            northcliffHillText.material = textMaterialCurrent
        }

function robbergApply() 
        {
            scene.background = eMapRobberg
            matSphere.envMap = eMapRobberg
        }

function augrabiesApply() 
        {
            scene.background = eMapAugrabies
            matSphere.envMap = eMapAugrabies
        }

function nSevenApply() 
        {
            scene.background = eMapNSeven
            matSphere.envMap = eMapNSeven
        }

function matjiesApply() 
        {
            scene.background = eMapMatjies
            matSphere.envMap = eMapMatjies
        }
function linksfieldApply() 
        {   
            scene.background = eMapLinksfield
            matSphere.envMap = eMapLinksfield
        }

function unterbacherSeeApply() 
        {
            scene.background = eMapUnterbacherSee
            matSphere.envMap = eMapUnterbacherSee
        }


//Event listener

window.addEventListener('click', () =>
{
    // switch(currentIntersect)
    // {
    //     case currentIntersect.object === northcliffHillText:
    //     northcliffHillApply()
    //     case currentIntersect.object === robbergText:
    //     robbergApply()
    //     case currentIntersect.object === augrabiesText:
    //     augrabiesApply()
    //     case currentIntersect.object === nSevenText:
    //     nSevenApply()
    //     case currentIntersect.object === linksfieldText:
    //     linksfieldApply()
    //     default:
    //     matjiesApply()
    // }

    if(currentIntersect)
    {
        if(currentIntersect.object === northcliffHillText)
        {
            northcliffHillApply()
        }
        else if(currentIntersect.object === robbergText)
        {
            robbergApply()
        }
        else if(currentIntersect.object === augrabiesText)
        {
            augrabiesApply()
        }
        else if(currentIntersect.object === linksfieldText)
        {
            linksfieldApply()
        }
        else if(currentIntersect.object === matjiesText)
        {
            matjiesApply()
        }
        else if(currentIntersect.object === nSevenText)
        {
            nSevenApply()
        }
        else if(currentIntersect.object === unterbacherSeeText)
        {
            unterbacherSeeApply()
        }
       
    }
})

const objectsToTest = [robbergText, northcliffHillText, augrabiesText, nSevenText, unterbacherSeeText, matjiesText, linksfieldText]



// //Dom events

// var domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// //three interactive

// const interactionManager = new InteractionManager(
//   renderer,
//   camera,
//   renderer.domElement
// )


// interactionManager.add(northcliffHillText)

// northcliffHillText.addEventListener
//         (
//         "touchend", 
//         (event) => 
//         {
//             event.target.mesh.material.color.set(0xff0000)
//             scene.background = eMapNorthcliffHill
//             matSphere.envMap = eMapNorthcliffHill
//         }
//         )

// northcliffHillText.addEventListener
//         (
//         "click", 
//         (event) => 
//         {
//             event.target.material.color.set(0xff0000)
//             scene.background = eMapNorthcliffHill
//             matSphere.envMap = eMapNorthcliffHill
//         }
//         )

// Controls
const controls = new OrbitControls(camera, renderer.domElement )
controls.enableDamping = true
controls.enablePan = false
controls.minDistance = 0
controls.maxDistance = 10
//controls.enableZoom = false
controls.dampingFactor = 0.05
controls.minPolarAngle = Math.PI / 4
controls.maxPolarAngle =  Math.PI / 1.25
// controls.minAzimuthAngle = - Math.PI / 3
// controls.maxAzimuthAngle = Math.PI / 3
/**



/**
 * Animate
 */

const clock = new THREE.Clock()

let currentIntersect = null


const tick = () =>
{

    //Raycaster
// //Cast a ray

raycaster.setFromCamera(mouse, camera)

// const rayOrigin = new THREE.Vector3(-3, 0, 0)
// const rayDirection = new THREE.Vector3(1, 0, 0)
// rayDirection.normalize()

// raycaster.set(rayOrigin, rayDirection)

const intersects = raycaster.intersectObjects(objectsToTest)

for(const object of objectsToTest)
{
    object.material = textMaterial
}

for(const intersect of intersects)
{
    intersect.object.material = textMaterialRollover
}

if(intersects.length)
{
    if(currentIntersect === null)
    {
        canvas.classList.add('rollover')
    }
    
    currentIntersect = intersects[0]
}
else
{
    if(currentIntersect)
    {
        canvas.classList.remove('rollover')
    }
    currentIntersect = null
}


    const elapsedTime = clock.getElapsedTime()
    
    // Update controls
    controls.update()

    matSphere.needsUpdate = true

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

    //three interatctive
    //interactionManager.update();
}

tick()

}, 1);
</script>

<canvas class="webgl"></canvas>
<div id="loading"class="loading-bar"></div>

