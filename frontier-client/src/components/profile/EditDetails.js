import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// Redux
import { connect } from "react-redux";
import { editUserDetails } from "../../redux/actions/userActions";

// Components
import MyButton from "../../util/MyButton";

// MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

// Icons
import EditIcon from "@material-ui/icons/Edit";
import { DialogContent } from "@material-ui/core";

const styles = (theme) => ({
	...theme.spreadThis,
	button: {
		float: "right",
	},
});

class EditDetails extends Component {
	state = {
		bio: "",
		website: "",
		location: "",
		open: false,
	};

	mapUserDetailsToState = (credentials) => {
		this.setState({
			bio: credentials.bio ? credentials.bio : "",
			website: credentials.website ? credentials.website : "",
			location: credentials.location ? credentials.location : "",
		});
	};

	componentDidMount() {
		const { credentials } = this.props;
		this.mapUserDetailsToState(credentials);
	}

	handleOpen = () => {
		this.setState({
			open: true,
		});
		this.mapUserDetailsToState(this.props.credentials);
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = () => {
		const userDetails = {
			bio: this.state.bio,
			website: this.state.website,
			location: this.state.location,
		};
		this.props.editUserDetails(userDetails);
		this.handleClose();
	};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<MyButton
					tip="Edit Details"
					onClick={this.handleOpen}
					btnClassName={classes.button}
				>
					<EditIcon color="primary" />
				</MyButton>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>Edit Details</DialogTitle>
					<DialogContent>
						<form>
							<TextField
								name="bio"
								type="text"
								label="Bio"
								value={this.state.bio}
								multiline
								rows="3"
								placeholder="A short bio about yourself"
								className={classes.textField}
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name="website"
								type="text"
								label="Website"
								value={this.state.website}
								placeholder="Website URL"
								className={classes.textField}
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								name="location"
								type="text"
								label="Location"
								value={this.state.location}
								placeholder="Location"
								className={classes.textField}
								onChange={this.handleChange}
								fullWidth
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	credentials: state.user.credentials,
});

EditDetails.propTypes = {
	editUserDetails: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { editUserDetails })(
	withStyles(styles)(EditDetails)
);
