import PropTypes from 'prop-types';
import { Link } from 'react-router';

const outerStyle = {
  display: 'block',
  padding: '15px',
  fontSize: '16px',
  textDecoration: 'none'
};

const iconStyle = {
  display: 'inline-block',
  marginRight: '5px'
};

const ColumnLink = ({ icon, text, to, href, method, hideOnMobile, external }) => {
  if (href) {
    const opts = external ? { target: '_blank', rel: 'noopener' } : {};
    return (
      <a href={href} className={`column-link ${hideOnMobile ? 'hidden-on-mobile' : ''}`} data-method={method} {...opts}>
        <i className={`fa fa-fw fa-${icon} column-link__icon`} />
        {text}
      </a>
    );
  } else {
    return (
      <Link to={to} className={`column-link ${hideOnMobile ? 'hidden-on-mobile' : ''}`}>
        <i className={`fa fa-fw fa-${icon} column-link__icon`} />
        {text}
      </Link>
    );
  }
};

ColumnLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  method: PropTypes.string,
  hideOnMobile: PropTypes.bool,
  external: PropTypes.bool
};

export default ColumnLink;
