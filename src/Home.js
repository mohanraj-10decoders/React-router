import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <h1>Welcome to online courses</h1>
      <button className={classes.navButton}>
        <NavLink to='/courses'>Go to courses</NavLink>
      </button>
      <h3>Courses we have for you</h3>
      <Container>
        <Row>
          <Col>
            <NavLink to='courses/nodejs'>
              <img
                src='data:image/webp;base64,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'
                alt='Node JS'
              />
            </NavLink>
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
              Node JS
            </div>
          </Col>
          <Col>
            <NavLink to='/courses/reactjs'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAwFBMVEUA1/4A1/////8A1/wA2PsA1P3n//8A1P/t///q///x//8A1PoA2foA0v7///z5//8AzvcA0fQAy/Dd//8B2/9H2fiO6/t55Pkp1fiB4vbl9/m28/pF2vTH9frp+PZX2/IAy/lp4O/M//5m1/Gk6/eV3+9N1vfT+/05z/R63PVU2+9S0OeS4+6u8PUz0e8RxeXU9f3///Wl6fhLzt7A8ftz2uue8PoA2/Zvz91a4vW26/OC2+rX8Plm3f2z9foAz+3m4SIMAAADe0lEQVR4nO3aW2/qRhSG4RlmxgafT5wCDiEcnB0Sh00habObzf//V11sqY2URL0Fte9zY5C4GH1as7zGRikAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDxjDZGLvrv7/pffvv/Za0KVax0WBmtKlNJZJGT7Ny5F3aJfGP6g+FIsnJSW64/GIz8yjprSOsjG8XjzlXameTOaH9aJ1fX6cxIjVn24Qfaj1pvfBPPynSe54NO3feLyW3hrDbnXtrl0f7Ca6vIZct09ZrOYx3qtdeqSDvq6iNjxmWhnInCQ6e7zipbqba3Pm1CfCRZNbm0dVs8p+k4k5b+cufNJCn24CfW/1bmUlfhOL0fS1d3kT/t9bkHfm0TFCp06+Ahu3ssW+lXi16rjWYTvjuFoSUT9VSullsv7Yikc11uV7vmSbYms/s77aRLRc4Nyu/JVsLq96NR/y2td16SNMPcVTSsf1jJIs6fO8FuWRZ33jzXzul8UB5vvNXPpDfMyOqdVebYdMa5ug9+29eF6i+fR+GxfDiUxzh8lkH+3Au8HE5H2W1zlDteVl93N/59kHS6rZsHVzsZQ/O2+5hLmpIolJUbXvdOOryJ551JWEyktSfLl6JOp8pYZxZB6yLjk9WJ9Re9J6ucMm36kOV7ySpdZuGk18q52ZpN0GrlonOv8jL4ui2lKRkXTq57RTg+ZTXzN0Gw9FVkj9t9UVmq6hf3otw0aEbOtt7vzTIvhk39R5Y3rz/KwriFV7YyUyj24C9ahaptkv36h3ezCDZVFMe+nQdt7h2G22SSaRtZGcLOvczLYKwx2ds2SYLVur69Ub5kVz5+23WT9HWUSVVJUpTVO23CO6+WE06SpGn6XS5B+Wf5FBrF86tPwmjTu9Gj6bC7ent76B1Gsb/2ZFrwLbvvo9A/eHkUmWzZa6fBw2n+XHszbR1n58/0oMydMbqoy+vJ8fSAQQ6HPq8Iv6Dd4PSsr7JVm3ZzI83ctN7CN5oHo5+E7uAVRttw3d3KTBVXrpp2p+b0KvrcS7s4xra9WRwVu87PY17LYSfOBmUhg7uhrj6J8ue0rpPuIrQmGwdB3aQH6yte0n/B6HxQ74e5VpGyNhvsa/lsae1fOP1twQltrZaArIpjKanTa2fSAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wF/AfmxOm7jpuwwAAAAAElFTkSuQmCC'
                alt='React JS'
              />
            </NavLink>
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
              React JS
            </div>
          </Col>
        </Row>
      </Container>
      <button></button>
    </div>
  );
}
