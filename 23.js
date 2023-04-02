const events = [
    {
      title: 'Music Festival',
      date: 'June 20, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: '23.jpg'
    },
    {
      title: 'Art Exhibition',
      date: 'July 15, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: '23_1.jpg'
    },
    {
      title: 'Food Festival',
      date: 'August 5, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: '23_2.jpg'
    },
    {
        title: 'Open Mic',
        date: 'Septermber 15, 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        image: '23_3.jpg'
      },
  ];
  
  const eventContainer = document.getElementById('event-container');
  
  events.forEach(event => {
    const card = document.createElement('div');
    card.classList.add('event-card');
  
    const image = document.createElement('img');
    image.src = event.image;
    card.appendChild(image);
  
    const title = document.createElement('h2');
    title.textContent = event.title;
    card.appendChild(title);
  
    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = event.date;
    card.appendChild(date);
  
    const description = document.createElement('p');
    description.textContent = event.description;
    card.appendChild(description);
  
    eventContainer.appendChild(card);
  });
  