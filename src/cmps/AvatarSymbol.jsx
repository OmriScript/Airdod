import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    size: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}))

export function AvatarSymbol() {
    const classes = useStyles()
    return (
        <Avatar className={classes.size}
            src="https://100k-faces.glitch.me/random-image" />
    )
}