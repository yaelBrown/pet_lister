import random
import string

letters = string.ascii_lowercase

class Listing:
    def __init__(self, cnt):
        self.heading = "heading" + str(cnt)
        self.subheading = "heading" + str(cnt)
        self.data = self._ran_str(25)
        self.idx = cnt

    def _ran_str(self, n=25):
        return ''.join(random.choice(letters) for i in range(n))

    def get_heading(self):
        return self.heading

    def get_subheading(self):
        return self.subheading

    def get_data(self):
        return self.data

    def get_idx(self):
        return self.idx

    def serialize(self):
        return {
            "heading": self.heading,
            "subheading": self.subheading,
            "data": self.data,
            "idx": self.idx
        }

    def __str__(self):
        return str(self.serialize())