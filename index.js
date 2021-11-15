function superbowlWin(records) {
    const found = records.find(record => record.result === "W")
      if (found) {
        return found.year
      }
    }
    




