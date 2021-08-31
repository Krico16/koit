export const Team = (props) => {
    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Conoce al equipo</h2>
                </div>
                <div className="row">
                    {
                        props.data ? 
                        props.data.map((e, i)=>(
                            <div className="col-md-3 col-sm-4 team">
                                <img src={`https://minotar.net/avatar/${e.skin}/64`} alt="asd" className="team-image" />
                                <h4>{e.nick}</h4>
                                <h5>{e.discordTag}</h5>
                            </div>
                        )) : 'loading'
                    }
                </div>
            </div>
        </div>
    )
}