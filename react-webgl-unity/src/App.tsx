import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded, loadingProgression  } = useUnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm"
  });



  return (
        <Unity
          unityProvider={unityProvider}
          matchWebGLToCanvasSize={true}
          style={{height: "100vh", width: "100vw"}}
        />
  );
}

export default App;

