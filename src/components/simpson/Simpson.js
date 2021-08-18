export default function  Simpson ({i,simpsons}){
    const {name,surname,age,info,photo}= simpsons[i]
    return(
        <div className={'simpsons'}>
                <div className={'nameAge'}>
                    <h4 className={'name'}>{name} {surname}, </h4>
                    <h4 className={'age'}> {age} years</h4>
                </div>
                <img className={'photo'} src={photo} alt=""/>
                <h5 className={'info'}>{info}</h5>
        </div>
    )
}