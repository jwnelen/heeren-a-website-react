import React from 'react';
import {FormControl, TextField} from "@material-ui/core";
import {Wrapper} from "./index";

const EditUserProfile = ({user}) => {
  const disabled = true

  return (
      <Wrapper className="space-y-3">
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
                disabled={disabled}
                variant="outlined"
                label="username"
                value={user?.username}
            /></FormControl>
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
                disabled={disabled}
                variant="outlined"
                label="email"
                value={user?.email}
            />
          </FormControl>
        </div>
        <div className="w-full">
          <FormControl fullWidth>
            <TextField
                disabled={disabled}
                variant="outlined"
                label="id of player"
                value={user?.user_player_id}
            />
          </FormControl>
        </div>
      </Wrapper>
  )
}

export default EditUserProfile


