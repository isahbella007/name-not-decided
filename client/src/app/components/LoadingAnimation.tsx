import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function LoadingAnimation() {
  return (
    <>
      <m.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <p>Something logo here</p>
        {/* <LogoIcon disabledLink sx={{ width: 64, height: 64, marginTop: 3.2 }} /> */}
      </m.div>

      <Box
        component={m.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: 150,
          height: 150,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme: { palette: { primary: { main: any; }; }; }) => `solid 3px ${alpha(theme.palette.primary.main, 0.6)}`,
        }}
      />

      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 180,
          height: 180,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme: { palette: { primary: { main: any; }; }; }) => `solid 8px ${alpha(theme.palette.primary.main, 0.6)}`,
        }}
      />
    </>
  );
}
