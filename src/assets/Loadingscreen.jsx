import './loadingscreen.css'

function LoadingScreen(){
    return(
        <>
        <div className='LoadingBody'>
        <h1 className='headingLoading'>Cooking in progress..</h1>
        <div id="cooking">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div id="area">
                <div id="sides">
                    <div id="pan"></div>
                    <div id="handle"></div>
                </div>
                <div id="pancake">
                    <div id="pastry"></div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default LoadingScreen;