import React from "react";
import ContainerComponentePreparo from "./Styles";

const ComponentePreparo = ({
  img1,
  img2,
  img3,
  img4,
  desc1,
  desc2,
  desc3,
  desc4,
  title,
  srcIframe,
  titleIframe,
  item4 = false,
}) => {
  return (
    <ContainerComponentePreparo className="container-fluid">
      <div className="container paddingTopBottom ">
        <div className="title textCenter redColorZinho">
          <p className="fs-2">{title}</p>
        </div>
        <div className="container-fluid bgTable">
          <div className="row paddingTopBottom container-fluid ">
            <div className="col-lg-6 containerItem ">
              <div className="row  ">
                <div className="col-lg-6 ">
                  <figure className="centerItem">
                    <img
                      src={img1}
                      alt={title}
                      className="img-fluid"
                      draggable="false"
                    />
                    <figcaption>
                      <p className="fs-6 paragraphColorSize textCenter">
                        <span>1</span>
                        {desc1}
                      </p>
                    </figcaption>
                  </figure>
                  <figure className="centerItem">
                    <img
                      src={img3}
                      alt={title}
                      className="img-fluid"
                      draggable="false"
                    />
                    <figcaption>
                      <p className="fs-6 paragraphColorSize textCenter">
                        <span>3</span>
                        {desc3}
                      </p>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-6">
                  <figure className="centerItem">
                    <img
                      src={img2}
                      alt={title}
                      className="img-fluid"
                      draggable="false"
                    />
                    <figcaption>
                      <p className="fs-6 paragraphColorSize textCenter">
                        <span>2</span>
                        {desc2}
                      </p>
                    </figcaption>
                  </figure>
                  {item4 && (
                    <figure className="centerItem">
                      <img
                        src={img4}
                        alt={title}
                        className="img-fluid"
                        draggable="false"
                      />
                      <figcaption>
                        <p className="fs-6 paragraphColorSize textCenter">
                          <span>4</span>
                          {desc4}
                        </p>
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <iframe
                width="100%"
                height="100%"
                src={srcIframe}
                title={titleIframe}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="container-fluid iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </ContainerComponentePreparo>
  );
};

export default ComponentePreparo;
