<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cbknxgiiz' );

/** Database username */
define( 'DB_USER', 'cbknxgiiz' );

/** Database password */
define( 'DB_PASSWORD', 'mp081216' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LXwrDLyakB3D~5H~Nu|{%&{GV3$w:<}+xw>.$gae~&}f6~g55B)h< dW7w@&DA79' );
define( 'SECURE_AUTH_KEY',  'kDN(Ni[OZ$fJ!+qJNkXg=L!~EZA(V~VE2t&TX#/rQ@n!!+zo)<H5;d6;Rqib]].3' );
define( 'LOGGED_IN_KEY',    'D6vo%`ZAe5}eD$ck3.k@;KqBZq2e:dqs[|&=Wh3$Pr2}&$YMT| +-Lv/1yGO(fGa' );
define( 'NONCE_KEY',        'KLFD(o>2&&#>$}o28Li(8lDY?*B/rjfZ$}Gmzbw5Ehj|?YREx=m3UcW?pjExp]#m' );
define( 'AUTH_SALT',        '[nP7nR!keG(Jg7ujTF*K@Kyb}|Rl+t{pPR;Kd2y<[HdzfvDT7a3!#0AX99*w[.jk' );
define( 'SECURE_AUTH_SALT', 'lujz|x,j&Ra%O=IH?XVQ1;xLqM!6-H@0c8 5a^JavK::H^bUA4uO{ {jd.v]uo{P' );
define( 'LOGGED_IN_SALT',   'f*A.ei_Ivx8U}EAd ) 2J|rVo$)T9N$(op=Lz];^ppOq$1?2fe +4lMQU{nj;M>f' );
define( 'NONCE_SALT',       '5Jf#72J:>o-Euk}*E.MI:X;<Kpafn$)O>=VM/6Sl,vE96s7XBQR+J,)j0fs:w_qO' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'craft_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
