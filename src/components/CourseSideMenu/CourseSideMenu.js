import React from 'react';
import { withRouter } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SIDEMENU from '../../data/menu/sidemenu.data';

import Sidebar from 'react-sidebar';
import CourseContent from '../CourseContent/CourseContent';

import api from '../../services/api';

import './CourseSideMenu.scss';

const mql = window.matchMedia(`(min-width: 800px)`);

class CourseSideMenu extends React.Component{
  constructor() {
    super();

    this.state = {
      menu: SIDEMENU,
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  componentDidMount() {
    this.getLevelCourse();
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  }

  getLevelCourse = async () => {
    const userId = localStorage.getItem('userId');
    const response = await api.get(`/user/${userId}`);

    if ( response.data.level === 0 ) {
      this.props.history.push('/dashboard');
    } else {
      this.setLevelCourse(response.data.level);
    }
  }

  setLevelCourse = level => {
    const { menu } = this.state;

    menu.map((item, index) => {
      if ( level === 0 ) {
        if ( index === 7){
          this.state.menu[index].enabled = false;
        } else {
          this.state.menu[index].enabled = true;
        }
      } else {
        if( item?.id === level || item?.id < level ) {
          this.state.menu[index].enabled = true;
        }
        if( item?.id === level ) {
          this.state.menu[index].hidden = false;
        } else {
          this.state.menu[index].hidden = true;
        }
  
        if ( item?.items ) {
          item.items.map((subitem, subindex) => {
            if (item?.id === level && subindex === 0) {
              subitem.hidden = false;
            } else {
              subitem.hidden = true;
            }
          });
        }
      }
    });
  }

  setHiddenItems = menu => {
    menu.map(item => {
      item.items.map(subitem => {
        subitem.hidden = true;
      });
    });
  }

  handleMenu = menu => {    
    return (
      <div className="sidemenu">
        {
          menu?.map((item, index) => (
            <div key={ item?.id }>
              <a 
                href="#" 
                className="menu-title"
                onClick={ () => {
                  if ( item?.enabled ) {
                    this.state.menu[index].hidden = !this.state.menu[index].hidden;
                  }
                }}
              >
                { item?.title } 
                <ExpandMoreIcon className="float-r" />
              </a>

              {
                item?.items.map((submenu, i) => 
                  <a 
                    key={i} 
                    href="#" 
                    className={ `menu-item ${item?.hidden ? 'hide' : ''}` }
                    onClick={ () => {
                      this.setHiddenItems(this.state.menu);

                      const menu = this.state.menu[index];
                      menu.items[i].hidden = false;
                    }}
                  >
                    { submenu.title }
                  </a>
                )
              }
            </div>          
          ))
        }
      </div>
    );
  }

  render(){
    const { menu, open, docked } = this.state;

    return (
      <div className="container">
        <Sidebar
          sidebar={this.handleMenu(menu)}
          open={open}
          onSetOpen={this.onSetOpen}
          docked={docked}
          styles={{ sidebar: { background: "white" } }}
        >
          <div className="header-course">
              {
                  !docked && (
                      <a
                        className="toggle-menu"
                        onClick={this.toggleOpen}
                        href="#"
                      >
                        <MenuIcon />
                      </a>
                  )
              }
              <h2>Head Start Courses |</h2>
              <h4> Food Safety - HACCP(Level 1)</h4>
          </div> 
          <CourseContent />
        </Sidebar>
      </div>
    );
  }
}

export default withRouter(CourseSideMenu);