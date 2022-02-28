function createAnalytics(){
    let counter = 0;
    let isDestroyed = false;
    let listener = () => counter++;
    document.addEventListener('click', listener);
    return {
        destroy(){
            isDestroyed = true;
            document.removeEventListener('click', listener);
            },
            getClicks(){
                if(isDestroyed){
                    return "analytics is destroyed!";
                }
                return counter;
            }
        }
    }
    window.analytics = createAnalytics();

