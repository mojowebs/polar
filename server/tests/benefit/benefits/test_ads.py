from typing import cast

import pytest

from polar.benefit.benefits.ads import BenefitAdsService
from polar.models import BenefitGrant, Organization, User
from polar.models.benefit import (
    BenefitAds,
    BenefitType,
)
from polar.postgres import AsyncSession
from tests.fixtures.database import SaveFixture
from tests.fixtures.random_objects import create_benefit


@pytest.mark.asyncio
@pytest.mark.skip_db_asserts
async def test_grant(
    session: AsyncSession,
    save_fixture: SaveFixture,
    user: User,
    organization: Organization,
) -> None:
    benefit = cast(
        BenefitAds,
        await create_benefit(
            save_fixture,
            type=BenefitType.ads,
            organization=organization,
            properties={"image_height": 100, "image_width": 100},
        ),
    )
    grant = BenefitGrant(user=user, benefit=benefit, properties={})

    benefit_ads_service = BenefitAdsService(session)
    grant_properties = await benefit_ads_service.grant(benefit, user, grant.properties)

    assert grant_properties == {}
