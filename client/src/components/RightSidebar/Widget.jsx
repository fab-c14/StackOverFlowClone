import React from "react";
import { FaPen } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

function Widget() {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <FaPen />
          <p>Observability is key to future of software your devops career</p>
        </div>

        <div className='right-sidebar-div-2'>
          <FaPen  />
          <p>Padcast 374 : how valueable is your screen.</p>
        </div>
      </div>

      <h4>Feature On Meta</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <FaComment  />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            totam magni saepe.
          </p>
        </div>

        <div className='right-sidebar-div-2'>
          <FaComment  />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus molestiae perspiciatis ab?
          </p>
        </div>

        <div className='right-sidebar-div-2'>
          <FaStackOverflow />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum
            ullam autem quos?
          </p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <p>38</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptatum dolorem quas.
          </p>
        </div>

        <div className='right-sidebar-div-2'>
          <p>28</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            necessitatibus aspernatur delectus.
          </p>
        </div>

        <div className='right-sidebar-div-2'>
          <p>14</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            repudiandae error placeat deleniti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
