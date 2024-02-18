async function makeReservation(userId, roomId, url) {
  let startDate = prompt(
    'Please provide starting date in format YYYY-MM-DD HH:MM:SS'
  );
  let endDate = prompt(
    'Please provide ending date in format YYYY-MM-DD HH:MM:SS'
  );

  // TODO: Add input validation here

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        UserId: userId,
        RoomId: roomId,
        StartDate: startDate,
        EndDate: endDate,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // If the server returns data, process it
    // const resData = await response.json();

    const resData = 'Made reservation';
    location.reload();
    return resData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
