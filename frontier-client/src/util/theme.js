const backgroundWhite = "#f3eae5";

// primary colors
const green = "#93BCA8";

const theme = {
	palette: {
		primary: {
			main: green,
			contrastText: "#F3EAE5",
		},
		secondary: {
			main: "#ddbea9",
		},
		background: {
			default: backgroundWhite,
		},
	},
	shape: {
		borderRadius: 16,
	},
	spreadThis: {
		frontierLogo: {
			maxWidth: 100,
		},
		navLogo: {
			color: backgroundWhite,
		},
		typography: {
			useNextVariants: true,
		},
		form: {
			textAlign: "center",
		},
		image: {
			margin: "20px auto 20px auto",
		},
		pageTitle: {
			margin: "10px auto 10px auto",
		},
		textField: {
			margin: "10px auto 10px auto",
		},
		button: {
			marginTop: 20,
			position: "relative",
		},
		customError: {
			color: "red",
			fontSize: "0.8rem",
			marginTop: 10,
		},
		progress: {
			position: "absolute",
		},
		invisibleSeparator: {
			border: "none",
			margin: 4,
		},
		visibleSeparator: {
			width: "100%",
			borderBottom: "1px solid rgba(0,0,0,0.04)",
			margin: "20px 0px",
		},
		paper: {
			padding: 20,
		},
		profile: {
			"& .image-wrapper": {
				textAlign: "center",
				position: "relative",
				"& button": {
					position: "absolute",
					top: "80%",
					left: "70%",
				},
			},
			"& .profile-image": {
				width: 200,
				height: "auto",
				objectFit: "cover",
				maxWidth: "100%",
				borderRadius: "50%",
			},
			"& .profile-details": {
				textAlign: "center",
				"& span, svg": {
					verticalAlign: "middle",
				},
				"& a": {
					color: "#00bcd4",
				},
			},
			"& hr": {
				border: "none",
				margin: "0 0 10px 0",
			},
			"& svg.button": {
				"&:hover": {
					cursor: "pointer",
				},
			},
		},
		buttons: {
			textAlign: "center",
			"& a": {
				margin: "20px 10px",
			},
		},
	},
};

export default theme;
