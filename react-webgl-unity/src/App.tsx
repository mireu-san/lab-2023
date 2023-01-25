import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, isLoaded, loadingProgression  } = useUnityContext({
    loaderUrl: "Build/2d-anime-no-zip.loader.js",
    dataUrl: "Build/2d-anime-no-zip.data",
    frameworkUrl: "Build/2d-anime-no-zip.framework.js",
    codeUrl: "Build/2d-anime-no-zip.wasm"
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (

      <div className="container">
        {isLoaded === false && (
          <div className="loading-overlay">
            <p>Loading... ({loadingPercentage}%)</p>
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{height: "100vh"}}
        />
      </div>

  );
}

export default App;

