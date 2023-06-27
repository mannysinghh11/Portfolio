const formatNameWithNickname = (fullName, nickname) => {
    console.log(fullName);
    const nameSplit = fullName.split(" ");
    const [firstName, lastName] = nameSplit;

    return `${firstName} (${nickname}) ${lastName}` 
}

export { formatNameWithNickname };