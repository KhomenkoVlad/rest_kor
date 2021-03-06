import { Link } from 'react-router-dom';
import { mainImages } from '../../../assets/images';

export const HomeAbout = () =>
  <section className='home-about'>
    <div className='section-wraper home-about__wrap'>
      <img className='home-about__image' src={mainImages.mainAboutImage} alt="" />
      <div className='home-about__description'>
        <h2 className='caption home-about__caption'>Наш Ресторан</h2>
        {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra dui tristique, viverra turpis vitae, tempus sapien. Sed non tortor molestie, vulputate odio ut, mollis leo. Curabitur a viverra felis. Etiam nec faucibus lacus, eu scelerisque ex. Curabitur suscipit augue vitae libero interdum, non egestas lectus suscipit. Vestibulum porttitor ex vel lacus venenatis, eget feugiat augue dignissim. Sed ligula nulla, convallis nec lectus eu, iaculis lobortis erat. Fusce rutrum, nisi sit amet dignissim euismod, arcu ante lobortis neque, sit amet vehicula ligula orci ut justo. In mollis feugiat nisl, eu ornare lacus euismod eu. In id risus convallis, vehicula arcu ut, imperdiet leo. Vestibulum non pharetra purus. Pellentesque non interdum massa. Etiam ligula tellus, suscipit sit amet auctor quis, bibendum at est. Phasellus gravida erat quis dolor feugiat imperdiet. Nulla magna enim, condimentum at eleifend et, ullamcorper nec risus. Vestibulum quis sagittis urna.</p>*/}
        <p>Mauris in varius dui. Praesent ex purus, pretium nec sollicitudin a, dignissim sit amet ante. Vivamus sem tortor, placerat ac eleifend scelerisque, pretium eu risus. Integer eget tortor mi. Etiam scelerisque mi vel lacus scelerisque congue. Nunc vulputate gravida condimentum. Etiam quam eros, faucibus ac luctus ultricies, aliquam consequat ex. Nunc vel orci non ipsum rutrum commodo.</p>
        <p>Quisque tortor quam, efficitur in vulputate et, ultrices quis turpis. Proin consectetur maximus sollicitudin. Pellentesque efficitur magna id aliquam facilisis. In at ullamcorper orci, a mollis neque. Proin sit amet neque dictum, euismod neque sed, egestas ante. Cras sed viverra ex. Morbi felis turpis, facilisis a malesuada sed, dapibus quis magna. Cras lacus enim, fringilla quis pharetra egestas, fringilla id magna.</p>
        <Link to='/about' className='home-about__button'><div className='home-about__button-caption'>Как заказть</div></Link>
      </div>
    </div>
  </section>