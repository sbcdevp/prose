export default {
    camera: {
        fov: 50,
        near: 0.01,
        far: 1000,
        position: {
            x: 0,
            y: 0,
            z: -10,
        }
    },
    lights: {
      directionalLight: {
          position: { x: 10, y: 10, z: -7.5 },
          intensity: 1.0,
          color: 0xffffff,
        },
        ambientLight: {
          intensity: 0.3,
          color: 0xffffff
        },
        helpers: {
          visible: false
        }
      },
      materials: {
        glass: {
              color: 0x6b3c20, 
              metalness: 0.0,
              roughness: 0,        
              transmission: 0.80, 
              transparent: true,
              ior: 1.5,
              reflectivity: 1.6,     
              thickness: 0.1,
              envMapIntensity: 0.1,  
              aoMapIntensity: 1,
        },
        pump: {
          color: 0x000000,
          roughness: 0.1,
          metalness: 0.7,
          envMapIntensity: 0.7,
        },
        interiorPlastic: {
          color: 0x000000,
          roughness: 0.7,
          metalness: 0.0,
        },
        ground: {
          color: 0xdcccbd,  
          aoMapIntensity: 1.3,
        },
        label: {
          color: 0xf79272,
          roughness: 0.4,
          metalness: 0.1,
          envMapIntensity: 1,  
        }

      }
}