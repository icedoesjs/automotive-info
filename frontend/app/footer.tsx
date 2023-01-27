export default function Footer() {
    return (
        <>
            <footer
                className="text-center text-lg-start text-dark"
            >

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Automotive Info</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60 + 'px', backgroundColor: '#7c4dff', height: 2 + 'px' }}
                                />
                                <p>
                                    Providing transparent data for your purchases
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Pages</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60 + 'px', backgroundColor: '#7c4dff', height: 2 + 'px' }}
                                />
                                <p>
                                    <a href="/decode" className="text-dark">VIN Decoder</a>
                                </p>
                                <p>
                                    <a href="/codes" className="text-dark">Code Reader</a>
                                </p>
                                <p>
                                    <a href="/search" className="text-dark">Search Vehicle</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Accounts</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60 + 'px', backgroundColor: '#7c4dff', height: 2 + 'px' }}
                                />
                                <p>
                                    <a href="#!" className="text-dark">Sign In</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark">Sign Out</a>
                                </p>
                                <p>
                                    <a href="/garage" className="text-dark">Your Garage</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Email Us</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60 + 'px', backgroundColor: '#7c4dff', height: 2 + 'px' }}
                                />
                                <p><i className="fas fa-home mr-3"></i>contact@automotive.info</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="text-center p-3"
                >
                    © 2023 Copyright 
                    <a className="text-theme text-decoration-none" href="https://automotive.info/"
                    > Automotive.info</a
                    >
                </div>
            </footer>
        </>
    )
}
