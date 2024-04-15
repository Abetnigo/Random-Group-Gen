function generateGroups() {
  const membersInput = document.getElementById('members').value.trim();
  const numGroups = parseInt(document.getElementById('num-groups').value);

  if (membersInput === "") {
      alert("Masukkan nama anggota terlebih dahulu!");
      return;
  }

  const members = membersInput.split(",").map(member => member.trim());

  if (members.length < numGroups) {
      alert("Jumlah anggota tidak mencukupi untuk pembagian kelompok!");
      return;
  }

  let groups = Array.from({ length: numGroups }, () => []);

  // Shuffle members
  for (let i = members.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [members[i], members[j]] = [members[j], members[i]];
  }

  // Distribute members to groups
  let currentGroup = 0;
  members.forEach(member => {
      groups[currentGroup].push(member);
      currentGroup = (currentGroup + 1) % numGroups;
  });

  // Display groups
  const outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = "";
  groups.forEach((group, index) => {
      const groupDiv = document.createElement('div');
      groupDiv.classList.add('group');
      const groupTitle = document.createElement('h2');
      groupTitle.innerText = `Kelompok ${index + 1}`;
      groupDiv.appendChild(groupTitle);
      const groupList = document.createElement('ul');
      group.forEach(member => {
          const memberItem = document.createElement('li');
          memberItem.innerText = member;
          groupList.appendChild(memberItem);
      });
      groupDiv.appendChild(groupList);
      outputContainer.appendChild(groupDiv);
  });
}
