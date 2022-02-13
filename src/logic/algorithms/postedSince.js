const postedSince=(date=Date.now())=>{
    function ms(duration){
        if(duration==="seconde") return 1000;
        if(duration==="minute") return 60 * ms("seconde");
        if(duration==="hour") return 60 * ms("minute");
        if(duration==="day") return 24 * ms("hour");
        if(duration==="week") return 7 * ms("day");
        if(duration==="month") return 5 * ms("week");
        if(duration==="year") return 12 * ms("month");
    };
    const time={seconde: 0, minute: 0, hour: 0, day: 0, week: 0, month: 0, year: 0};
    Object.keys(time).forEach(k=>time[k]=ms(k));

    const format=(dura, num)=>`${num} ${dura}${num>1? "s": ""} ago`;
    const current=Date.now() - date;
    if(current>=time.year) return format("year", Math.floor(current/time.year));
    if(current>=time.month) return format("month", Math.floor(current/time.month));
    if(current>=time.week) return format("week", Math.floor(current/time.week));
    if(current>=time.day) return format("day", Math.floor(current/time.day));
    if(current>=time.hour) return format("hour", Math.floor(current/time.hour));
    if(current>=time.minute) return format("minute", Math.floor(current/time.minute));
    if(current>=time.seconde) return format("seconde", Math.floor(current/time.seconde));
    return "Just Now"
}

export default postedSince;