import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function LoginAlert({ isOpen, closeAlert, message, severity }) {
	return (
		<Box sx={{ width: '100%' }}>
			<Collapse in={isOpen}>
				<Alert
					severity={severity}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => {
								closeAlert(false);
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
					sx={{ mb: 2 }}
				>
					{message}
				</Alert>
			</Collapse>
		</Box>
	);
}
