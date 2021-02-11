import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';

/**
 * <pre><code>
 * links={
 *  [{title: '', link: ''}]
 * }
 *
 * interface navigator {
 *  push: (link) => {}
 * }
 * </code></pre>
 */
const Breadcrumbs = (props) => {
  const { links, navigator, onNavigate } = props;

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {links.map(({ title, link }) => {
        if (link) {
          return (
            <Link
              key={title}
              color="inherit"
              onClick={(event) => {
                event.preventDefault();
                if (onNavigate) {
                  onNavigate(link);
                } else if (navigator) {
                  navigator.push(link);
                }
              }}
            >
              {title}
            </Link>
          );
        }
        return (
          <Typography key={title} color="textPrimary">
            {title}
          </Typography>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
