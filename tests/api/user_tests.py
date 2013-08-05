# coding=UTF-8
"""
    tests.api.user_tests
    ~~~~~~~~~~~~~~~~~~~~

    api user tests module
"""

from . import ApplicationApiTestCase


class UserApiTestCase(ApplicationApiTestCase):

    def test_get_current_user(self):
        r = self.jget('/users')
        self.assertOkJson(r)

    def test_get_user(self):
        r = self.jget('/users/%s' % self.user.id)
        self.assertOkJson(r)

    def test_delete_user(self):
        r = self.xdelete('/users/%s' % self.user.id)
        self.assertOkJson(r)