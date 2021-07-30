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
                                {e.nick}
                            </div>
                        )) : 'loading'
                    }
                </div>
            </div>
        </div>
    )
}