package com.lillin.lillin.entities;

import com.lillin.lillin.entities.user.Email;
import com.lillin.lillin.entities.user.Id;
import com.lillin.lillin.entities.user.Name;
import com.lillin.lillin.entities.user.Password;

public record UserData(Id id, Name name, Email email, Password password) {
}
