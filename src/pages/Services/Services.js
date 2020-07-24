import React from 'react';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import './Services.scss';

function Services() {
  return (
    <div 
      id="services" 
      className="container txt-center services"
    >
      <h1>SERVICES</h1>

      <h2>Online Courses</h2>
      <section className="services-cards">
        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </section>

      <h2>Face-to-face Courses</h2>
      <section className="services-cards">
        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="services-card">
          <CardContent>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam doloremque soluta 
              quis obcaecati reprehenderit vero quia recusandae accusantium nam? Eius et blanditiis aliquam 
              nisi consectetur impedit, ut ullam nesciunt.
            </p>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </section>
    </div>
  );
}

export default Services;