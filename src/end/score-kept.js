function scoreKept(user) {
    if(user <= 0) {
        return 'none';
    }
    if(user <= 3){
        return 'some';
    } 
    return 'all';
}

export default scoreKept;
