const getDonatedData = () => {
    const storedDonatedData = localStorage.getItem('donated');

    if (storedDonatedData) {
        return JSON.parse(storedDonatedData);
    } else {
        return []
    }
};

const saveDonatedData = (id) => {
    const storedDonatedDatas = getDonatedData();
    const exisits = storedDonatedDatas.find(donateId => donateId === id);

    if(!exisits){
        storedDonatedDatas.push(id);
        localStorage.setItem('donated', JSON.stringify(storedDonatedDatas))
    }
}

export{saveDonatedData, getDonatedData}